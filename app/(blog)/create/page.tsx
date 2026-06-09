import RichTextEditor from "@/app/components/text-editor";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { SimpleEditorViewOnly } from "@/components/tiptap-templates/simple/simple-editor-viewOnly";





export default function page(){


    return(
        <div className="flex justify-center items-start w-full">
            {/* <RichTextEditor/> */}
            {/* <SimpleEditorViewOnly/> */}
            <SimpleEditor/>
        </div>
    )
}