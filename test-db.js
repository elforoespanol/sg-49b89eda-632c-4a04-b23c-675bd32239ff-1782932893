const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function check() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(`id, title, status, categories(name, slug)`)
    .eq("status", "published")
    .limit(5);
    
  console.log("Error:", error);
  console.log("Data count:", data?.length);
  console.log("Sample:", JSON.stringify(data, null, 2));
}

check();
