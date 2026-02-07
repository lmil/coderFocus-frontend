// Project entity
export interface Project {
  id: string;
  name: string;
  description?: string;
  color: string; // Hex color code (e.g., "#3B82F6")
  gitRepo?: string; // Git repository URL (Phase 3)
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
}

// Project creation input
export interface CreateProjectInput {
  name: string;
  description?: string;
  color: string;
  gitRepo?: string;
}

// Project update input
export interface UpdateProjectInput {
  id: string;
  name?: string;
  description?: string;
  color?: string;
  gitRepo?: string;
  isArchived?: boolean;
}
