  
  const { createClient } = supabase;
  const supabaseClient = window.supabase.createClient(
    'https://tkgkrftlwhzibpizhpqt.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrZ2tyZnRsd2h6aWJwaXpocHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5ODY1MzksImV4cCI6MjA5MzU2MjUzOX0.YbSXXMAr3br370uovvUNJ4v82lMS9UB0f752yUJhezE'
  );




async function contarDownload(nomeArquivo) {

    const { data, error } = await supabaseClient
        .from('downloads_logs')
        .insert([
            {
                arquivo: nomeArquivo
            }
        ]);

    if (error) {

        console.log(error);

    } else {

        console.log(
            'Download registrado:',
            nomeArquivo
        );

    }

}