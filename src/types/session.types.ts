import { type SessionType } from "./timer.types";

// Session entity (historical record)
export interface Session {
  id: string;
  type: SessionType; // POMODORO | SHORT_BREAK | LONG_BREAK
  taskId?: string; // Optional: linked task
  projectId?: string; // Optional: linked project
  duration: number; // in seconds (e.g., 1500 for 25 min)
  wasCompleted: boolean; // Did user finish or abandon?

  // Git context (Phase 3)
  gitBranch?: string;
  gitCommit?: string;
  language?: string; // Programming language detected
  linesChanged?: number;

  startedAt: string; // ISO 8601 timestamp
  completedAt?: string; // ISO 8601 timestamp (null if abandoned)
}

// Session creation input
export interface CreateSessionInput {
  type: SessionType;
  taskId?: string;
  projectId?: string;
  duration: number;
}

// Session update input (typically just completion)
export interface UpdateSessionInput {
  id: string;
  completedAt?: string;
  wasCompleted?: boolean;
  gitBranch?: string;
  gitCommit?: string;
  language?: string;
  linesChanged?: number;
}

// Session statistics (for analytics)
export interface SessionStats {
  totalSessions: number;
  completedSessions: number;
  abandonedSessions: number;
  totalDuration: number; // in seconds
  completionRate: number; // percentage (0-100)
  averageSessionDuration: number; // in seconds
}
