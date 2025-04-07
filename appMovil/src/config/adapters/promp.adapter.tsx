import prompt from "react-native-prompt-android";

interface Optios{
  titulo?:string;
  subTitulo?:string;
  buttons?:PromptButton[];
  promptType?:"plain-text"|"secure-text";/* "default"|"plain-text"|"secure-text"; */
  placeHolder?:string,
  defaultValue?:string
}

interface PromptButton{
    text:string;
    onPress?:() =>void;
    style?:"cancel"|"default"|"destructive";
}

export const showPromp = ({
    titulo,
    subTitulo,
    buttons,
    promptType ="plain-text",
    placeHolder,
    defaultValue
}:Optios) => {
    
    prompt(
        titulo,
        subTitulo,
        buttons,
                {
                    type: promptType,
                    cancelable: false,
                    defaultValue: defaultValue,
                    placeholder: placeHolder
                }
        );
    
}