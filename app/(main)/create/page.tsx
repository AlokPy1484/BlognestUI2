import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";







export default function page() {


    return (
        <div className="flex justify-center items-start w-full">
            {/* <RichTextEditor/> */}
            {/* <SimpleEditorViewOnly/> */}
            <SimpleEditor />
        </div>
    )
}