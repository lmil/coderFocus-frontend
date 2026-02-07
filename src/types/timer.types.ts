// Session type
export type SessionType = "POMODORO" | "SHORT_BREAK" | "LONG_BREAK";

// Timer state
export interface TimerState {
  type: SessionType;
  timeRemaining: number; // in second
  isRunning: boolean;
  isPaused: boolean;
  completedPomodoros: number; // count for long break trigger
}

// Timer settings (user preferences)
export interface TimerSettings {
  pomodoroDuration: number; // in minutes
  shortBreakDuration: number;
  longBreakDuration: number;
  pomodorosUntilLongBreak: number;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}
