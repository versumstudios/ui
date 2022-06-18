/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from 'react';

import { Box } from '../box';
import { Button } from '../button';
import { Checkbox } from '../checkbox';
import { Text } from '../text';

import { Label } from './label';
import * as Styles from './styles';

export interface ITableSetting {
  key: string;
  label: string;
  Component?: FC;
  order?: number;
}

export interface IBatchActions {
  label: string;
  fn?: (values: any) => void;
}

export interface ITable {
  settings: ITableSetting[];
  data: any[];
  batch?: IBatchActions[];

  // settings
  canSelect?: boolean;
}

export const Table: FC<ITable> = ({ settings, data, canSelect = true, batch = [] }) => {
  // we need to store settings and data locally because we manipulate it to store "state" per row
  // to define things like sorting and selection.
  const [parsedSettings, setParsedSettings] = useState(settings);
  const [parsedData, setParsedData] = useState(data);

  // update if new settings/data arrives
  useEffect(() => {
    setParsedSettings(settings);
    setParsedData(data);
  }, [settings, data]);

  const handleSortBy = (key: string) => {
    // settings
    const prevSettings = [...parsedSettings];
    const nextSettings = prevSettings.map((setting) => {
      if (setting.key === key) {
        if (setting.order === undefined) {
          setting.order = 0;
        }
        setting.order += 1;
        setting.order %= 3;
      } else {
        delete setting.order;
      }

      return setting;
    });

    // data
    const found = nextSettings.find((e) => e.key === key);
    const requiresSorting = found?.order !== 0;
    if (requiresSorting) {
      // sort
      const prevData = [...parsedData];
      const nextData = prevData.sort((a, b) => {
        if (found?.order === 1) {
          return a[key] > b[key] ? 1 : -1;
        }
        return a[key] > b[key] ? -1 : 1;
      });

      // set settings and data
      setParsedSettings(nextSettings);
      setParsedData(nextData);
    } else {
      // set settings and data
      setParsedData(data);
    }
  };

  const handleSelectionAll = (value: boolean) => {
    const nextData = parsedData.map((row) => {
      row.selected = value;
      return row;
    });
    setParsedData(nextData);
  };

  const handleSelection = (index: number, value: boolean) => {
    const nextData = [...parsedData];
    nextData[index].selected = value;

    setParsedData(nextData);
  };

  const hasSelection = () => {
    return parsedData.filter((s) => s.selected).length > 0;
  };

  const displayRowSelection = () => {
    const count = parsedData.filter((s) => s.selected).length;
    const total = parsedData.length;

    if (count) {
      if (count === total) {
        return 'All rows selected';
      }

      if (count > 1) {
        return `${count} rows selected`;
      }

      return `${count} row selected`;
    }

    return null;
  };

  return (
    <>
      <Styles.Container>
        <Styles.Table>
          <Styles.Thead>
            <tr>
              {canSelect && (
                <th>
                  <Box
                    css={{
                      width: 30,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Checkbox onChange={handleSelectionAll} />
                  </Box>
                </th>
              )}
              {parsedSettings.map((setting) => {
                return (
                  <th key={setting.key}>
                    <Label order={setting.order} label={setting.label} onClick={() => handleSortBy(setting.key)} />
                  </th>
                );
              })}
            </tr>
          </Styles.Thead>

          <Styles.Tbody>
            {parsedData.map((row, rowIndex) => {
              return (
                <tr key={`row${rowIndex}`}>
                  {canSelect && (
                    <td>
                      <Box
                        css={{
                          width: 30,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Checkbox
                          value={row.selected}
                          onChange={(value: boolean) => handleSelection(rowIndex, value)}
                        />
                      </Box>
                    </td>
                  )}

                  {parsedSettings.map((component) => {
                    const { key, Component } = component;
                    return (
                      <td key={`row${rowIndex}-${component.key}`}>
                        {Component ? <Component {...row} /> : <Text unset>{row[key]}</Text>}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </Styles.Tbody>
        </Styles.Table>
      </Styles.Container>

      {/* TODO: move this outside the TABLE */}
      {hasSelection() && (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '$space$3',
          }}
        >
          <Text unset css={{ color: '$secondaryFill', fontSize: 12 }}>
            {displayRowSelection()}
          </Text>
          <Box>
            {batch.map((action: IBatchActions) => {
              return (
                <Button
                  key={action.label}
                  variant="market"
                  onClick={() => {
                    if (action.fn) {
                      action.fn(parsedData.filter((e) => e.selected));
                    }
                  }}
                >
                  {action.label}
                </Button>
              );
            })}
          </Box>
        </Box>
      )}
    </>
  );
};
