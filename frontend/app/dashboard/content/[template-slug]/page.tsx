"use client"
import React, { useEffect, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TempleListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import Header from '../../_components/Header'
import { useRouter } from 'next/navigation'

// import { db } from '@/utils/db'
// import { AIOutput } from '@/utils/schema'
// import moment from 'moment'

interface PROPS{
    params:{
        'template-slug':string
    }
}

const CreateNewContent = (props:PROPS) => {

    // Find the selected template based on the template-slug from the props
    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug == props.params['template-slug'])

    const [loading, setLoading] = useState(false)
    const [aiOutput, setAiOutput] = useState<string>('')
    const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('loggedInUser');
    setToken(storedToken);
    setUsername(storedUsername);

    if (!storedToken) {
      const timeout = setTimeout(() => {
        router.push('/login');
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, []);

    const GenerateAIContent = async(formData:any) => {
      setLoading(true);
      const SelectedPrompt = selectedTemplate?.aiPrompt;
      const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAIPrompt);

      console.log(result.response.text());
      setAiOutput(result?.response.text());
      setLoading(false);
    }


  return (
    <div className="md:ml-64">
    <Header token={token} username={username} />
    <div className='p-5'>
        <Link href={"/dashboard"}>
        <Button> <ArrowLeft/> Back</Button>
        </Link>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
      {/* FormSection */}
      <FormSection selectedTemplate={selectedTemplate} 
      userFormInput={(v:any)=>GenerateAIContent(v)}
      loading={loading}/>

      {/* OutputSection */}
      <div className="col-span-2">
      <OutputSection aiOutput={aiOutput}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default CreateNewContent
