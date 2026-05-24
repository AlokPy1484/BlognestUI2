"use client"

import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"


const blog = {
  title: "Building Modern Blog Platforms with Next.js",

  content: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 1
        },
        content: [
          {
            type: "text",
            text: "Building Modern Blog Platforms"
          }
        ]
      },

      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Modern blog platforms are no longer simple text pages. Rich content systems allow authors to include code snippets, quotes, media, and interactive content while keeping a clean reading experience."
          }
        ]
      },

      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Design is intelligence made visible."
              }
            ]
          }
        ]
      },

      {
        type: "heading",
        attrs: {
          level: 2
        },
        content: [
          {
            type: "text",
            text: "Key Features"
          }
        ]
      },

      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Rich text editing"
                  }
                ]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Custom code blocks"
                  }
                ]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Embedded media support"
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        type: "heading",
        attrs: {
          level: 2
        },
        content: [
          {
            type: "text",
            text: "Code Example"
          }
        ]
      },

      {
        type: "codeBlock",
        attrs: {
          language: "typescript"
        },
        content: [
          {
            type: "text",
            text: `const editor = useEditor({
  extensions:[StarterKit],
  content: blog.content
})`
          }
        ]
      },

      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Using JSON as the source of truth makes it easier to create custom rendering systems and build scalable publishing platforms."
          }
        ]
      }
    ]
  }
}

export default function Blogpage(){


    const editor = useEditor({
        extensions:[StarterKit],
        content:blog.content,
        editable:false
    })
    
    return(
        <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center items-center max-w-[700px]">
            <EditorContent editor={editor}/>
            </div>
        </div>
    )
}