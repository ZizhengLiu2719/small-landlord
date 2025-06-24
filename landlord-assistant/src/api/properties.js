// src/api/properties.js
import { supabase } from '../lib/supabaseClient';

// 获取房源列表，按合同到期时间排序
export async function fetchProperties() {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('contract_end_date', { ascending: true });
  if (error) throw error;
  return data;
}

// 添加房源
export async function addProperty(property) {
    const { data: { user } } = await supabase.auth.getUser();
    console.log('Current user:', user); // <--- 加这一行
    if (!user) throw new Error('Not logged in');
    const { data, error } = await supabase
      .from('properties')
      .insert([{ ...property, user_id: user.id }])
      .select()
      .single();
    if (error) throw error;
    return data;
  }

// 编辑房源
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

// 删除房源
export async function deleteProperty(id) {
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return true;
}