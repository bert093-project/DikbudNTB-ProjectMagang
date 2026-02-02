import { createClient } from '@/lib/supabaseServer'
import { Suspense } from 'react'

async function DikbudData() {
  const supabase = await createClient();
  const { data: dikbud } = await supabase.from("dikbud").select();

  return <pre>{JSON.stringify(dikbud, null, 2)}</pre>
}

export default function FetchDikbud() {
  return (
    <Suspense fallback={<div>Loading Dikbud data...</div> }>
      <DikbudData/>
    </Suspense>
  );
}