
import { createClient } from '@supabase/supabase-js';

// Use the correct Supabase URL and key from the integrations client
const supabaseUrl = 'https://jhcnyhtapzjexeetfibl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoY255aHRhcHpqZXhlZXRmaWJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NDk1MTUsImV4cCI6MjA2MDEyNTUxNX0.7aBrbFO7wtETdwKUTOwFX2AkCEcEbscc9hJGIx7iG9g';

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// This function helps components check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl && supabaseAnonKey;
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
