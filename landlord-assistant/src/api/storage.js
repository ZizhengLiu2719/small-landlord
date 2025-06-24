import { supabase } from '../lib/supabaseClient';

export async function uploadFile(file, bucket) {
  const fileExt = file.name.split('.').pop();
  // 一定要加文件夹前缀，比如 user_id 或 'public'
  const filePath = `public/${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;
  const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);
  if (error) throw error;
  const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(filePath);
  return urlData.publicUrl;
}