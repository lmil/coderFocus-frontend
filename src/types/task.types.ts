export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type TaskStatus = "TODO" | "IN_PROGRESS" | "COMPLETED";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  projectId?: string;
  estimatedPomodoros: number;
  actualPomodoros: number;
  createdAt: string; // ISO 8601 date string
  updatedAt: string;
  completedAt?: string;
}

// Task creation input (no id, timestamps)
export interface CreateTaskInput {
  title: string;
  description?: string;
  priority: TaskPriority;
  projectId?: string;
  estimatedPomodoros: number;
}

// Task update input (all optional except id)
export interface UpdateTaskInput {
  id: string;
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  projectId?: string;
  estimatedPomodoros?: number;
}
