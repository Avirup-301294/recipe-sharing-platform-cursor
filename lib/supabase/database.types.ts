/**
 * Matches your Supabase `public` schema (profiles + recipes).
 * Regenerate later with: `npx supabase gen types typescript --project-id <id>`
 */
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          fullname: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username: string;
          fullname?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          fullname?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      recipes: {
        Row: {
          id: string;
          created_at: string;
          user_id: string;
          title: string;
          ingredients: string;
          instruction: string;
          cooking_time: number | null;
          difficulty: string | null;
          category: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string;
          user_id: string;
          title: string;
          ingredients: string;
          instruction: string;
          cooking_time?: number | null;
          difficulty?: string | null;
          category?: string | null;
        };
        Update: {
          id?: string;
          created_at?: string;
          user_id?: string;
          title?: string;
          ingredients?: string;
          instruction?: string;
          cooking_time?: number | null;
          difficulty?: string | null;
          category?: string | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
