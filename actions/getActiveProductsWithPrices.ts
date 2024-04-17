import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { ProductWithPrice, Song } from "@/types";

const getActiveProducts = async (): Promise<ProductWithPrice[]> => {
  const supabase = createServerComponentClient({  
    cookies: cookies
  });

  const { data, error } = await supabase
    .from('products')
    .select('*,prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount',{foreignTable:'pricess'})

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getActiveProducts;