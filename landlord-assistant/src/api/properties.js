// src/api/properties.js
import { supabase } from '../lib/supabaseClient';

// 1. 获取当前用户的所有房源，按合同到期时间排序
export async function fetchProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('contract_end_date', { ascending: true });
  if (error) throw error;
  return data;
}

// 2. 添加房源
export async function addProperty(property) {
  const { data, error } = await supabase
    .from('properties')
    .insert([property])
    .select()
    .single();
  if (error) throw error;
  return data;
}

// 3. 编辑房源
export async function updateProperty(id, updates) {
  const { data, error } = await supabase
    .from('properties')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// 4. 删除房源
export async function deleteProperty(id) {
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
}