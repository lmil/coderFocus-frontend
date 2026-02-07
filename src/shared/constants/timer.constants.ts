// Timer durations in seconds
export const TIMER_DURATIONS = {
  POMODORO: 25 * 60, // 25 minutes
  SHORT_BREAK: 5 * 60, // 5 minutes
  LONG_BREAK: 15 * 60, // 15 minutes
} as const;

// How many Pomodoros before a long break
export const POMODOROS_UNTIL_LONG_BREAK = 4;

// Timer limits
export const MIN_TIMER_DURATION = 1 * 60; // 1 minute
export const MAX_TIMER_DURATION = 60 * 60; // 60 minutes
