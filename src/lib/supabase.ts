
import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This function helps components check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return (
    supabaseUrl !== 'https://your-project-url.supabase.co' && 
    supabaseAnonKey !== 'your-anon-key' &&
    supabaseUrl && 
    supabaseAnonKey
  );
};

// Function to test the Supabase connection
export const testSupabaseConnection = async () => {
  try {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase is not properly configured');
    }
    
    // Simple query to test the connection
    const { error } = await supabase.from('Website registrations').select('count', { count: 'exact', head: true });
    
    if (error) throw error;
    
    return { success: true, message: 'Successfully connected to Supabase' };
  } catch (error: any) {
    console.error('Supabase connection test failed:', error);
    return { 
      success: false, 
      message: 'Failed to connect to Supabase', 
      error: error.message || 'Unknown error' 
    };
  }
};

// Utility function to check if a table exists
export const checkTableExists = async (tableName: string) => {
  try {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase is not properly configured');
    }
    
    const { error } = await supabase.from(tableName).select('count', { count: 'exact', head: true });
    
    return !error;
  } catch (error) {
    console.error(`Error checking if table ${tableName} exists:`, error);
    return false;
  }
};
