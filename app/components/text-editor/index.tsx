'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './menubar'


export default function RichTextEditor(){

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p> Hello World </p> <img src="https://placehold.co/600x400" />',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
    editorProps: {
        attributes: {
            class: " py-2 px-3 m-10 w-[600px] min-h-[300px] bg-neutral-100 border border-dashed rounded-xl outline-none"
        }
    }
  })

  return (
  <div className='flex flex-col'>
  <Menubar editor={editor}/>
  <EditorContent editor={editor} />
  </div>
  )
}

