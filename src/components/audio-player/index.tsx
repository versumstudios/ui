/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef, useState } from 'react';

import { Slider } from '../slider';
import { Text } from '../text';

import * as Styles from './styles';

export interface IAudioPlayer {
  audioUri: string | undefined;
  onPlayPauseChange?: (value: boolean) => void;
}

export const AudioPlayer: FC<IAudioPlayer> = ({ audioUri, onPlayPauseChange }) => {
  const UPDATE_RATE = 350;
  const DEFAULT_FAST_DIVIDER = 10;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | undefined>(typeof Audio !== 'undefined' ? new Audio(audioUri) : undefined);
  const intervalRef = useRef(0);
  const volumeRef = useRef(1);
  const [scrubValue, setScrubValue] = useState(0);
  const [scrubTotal, setScrubTotal] = useState(1);

  const getSecondsToTime = (seconds = 1): string => {
    if (seconds < 3600) {
      // mm:ss
      return new Date(seconds * 1000).toISOString().substr(14, 5);
    }

    // hh:mm:ss
    return new Date(seconds * 1000).toISOString().substr(11, 8);
  };

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      const cur = audioRef.current?.currentTime || 0;
      const total = audioRef.current?.duration || 1;
      if (!audioRef.current?.ended) {
        setScrubValue(cur);
        setScrubTotal(total);
      }
    }, UPDATE_RATE);
  };

  const onScrubChange = (nextValue: number) => {
    const v = Number(nextValue);

    if (audioRef.current) {
      audioRef.current.currentTime = v;
    }
  };

  const onSkipPrevious = () => {
    // TODO: handle previous logic in "album" context
  };

  const onFastRewind = () => {
    if (audioRef.current) {
      const amount = audioRef.current.duration / DEFAULT_FAST_DIVIDER;
      audioRef.current.currentTime -= amount;
    }
  };

  const onFastForward = () => {
    if (audioRef.current) {
      const amount = audioRef.current.duration / DEFAULT_FAST_DIVIDER;
      audioRef.current.currentTime += amount;
    }
  };

  const onSkipNext = () => {
    // TODO: handle next logic in "album" context
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();

        if (onPlayPauseChange) {
          onPlayPauseChange(true);
        }
      } else {
        audioRef.current.pause();
        if (onPlayPauseChange) {
          onPlayPauseChange(false);
        }
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    // onmount / change track
    audioRef.current?.pause();
    if (onPlayPauseChange) {
      onPlayPauseChange(false);
    }

    const onDurationChange = async () => {
      if (audioRef.current) {
        setScrubValue(audioRef.current.currentTime);
        setScrubTotal(audioRef.current.duration);
      }
    };

    audioRef.current = new Audio(audioUri);
    audioRef.current.volume = volumeRef.current;
    audioRef.current.addEventListener('durationchange', onDurationChange);

    // unmount
    return () => {
      audioRef.current?.pause();
      clearInterval(intervalRef.current);
      if (audioRef.current) {
        audioRef.current.removeEventListener('durationchange', onDurationChange);
      }
    };
  }, [audioUri]);

  return (
    <div>
      <Styles.Controls>
        {false && (
          <Styles.Secondary onClick={onSkipPrevious}>
            <i>skip_previous</i>
          </Styles.Secondary>
        )}

        <Styles.Secondary onClick={onFastRewind}>
          <i>fast_rewind</i>
        </Styles.Secondary>

        <Styles.Main onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <i>pause_circle_filled</i> : <i>play_circle_filled</i>}
        </Styles.Main>

        <Styles.Secondary onClick={onFastForward}>
          <i>fast_forward</i>
        </Styles.Secondary>

        {false && (
          <Styles.Secondary onClick={onSkipNext}>
            <i>skip_next</i>
          </Styles.Secondary>
        )}
      </Styles.Controls>

      <Styles.Scrub css={{ width: '100%' }}>
        <Text unset css={{ fontFamily: '$mono', fontSize: 12, color: '$secondaryFill', marginRight: '$4' }}>
          {getSecondsToTime(scrubValue)}
        </Text>
        <Slider value={[scrubValue]} max={scrubTotal} label="audio-scrub" onChange={onScrubChange} />
        <Text unset css={{ fontFamily: '$mono', fontSize: 12, color: '$secondaryFill', marginLeft: '$4' }}>
          -{getSecondsToTime(scrubTotal - scrubValue)}
        </Text>
      </Styles.Scrub>
    </div>
  );
};
