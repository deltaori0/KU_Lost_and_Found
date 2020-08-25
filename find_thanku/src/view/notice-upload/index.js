import React,{Component} from "react";
import * as S from "./styles";
import TextEditor from "../../component/find-text-editor";
import Layout from "../../component/layout";
import axios from "axios";
import { render } from "@testing-library/react";
import { Editor } from "@tinymce/tinymce-react";
const headers = { withCredentials: true };

class NoticeUpload extends Component{
  Upload = () => {
    const send_param = {
      headers,
      title: this.title.value,
      content: this.content,
    };
    axios
      .post("http://localhost:4000/notice/upload", send_param)
      //정상 수행
      //에러
      .catch(err => {
        console.log(err);
      });
    alert("작성 완료!");
  };
  //texteditor 관련
  handleEditorChange = (e) => {
    console.log(e.target.getContent());
    this.content = e.target.getContent();
  };
  render (){
    return (
      <Layout>
        <S.Upload>
          <S.UploadContainer>
            <S.TitleContainer>
              <S.Title>글 작성</S.Title>
            </S.TitleContainer>
            <S.WriteInputContainer>
              <S.NameInput 
                type="text"
                ref={(ref) => (this.title = ref)}
                placeholder="제목" />
            </S.WriteInputContainer>

            <S.TextEditorContainer>
              <S.TextEditor>
                <Editor
                  initialValue=""
                  init={{
                    height: 500,
                    menubar: false,
                    placeholder: "습득물 게시판에 대한 공지사항이 들어갈 예정입니다.",
                    plugins: [
                      "advlist autolink lists link image",
                      "charmap print preview anchor help",
                      "searchreplace visualblocks code",
                      "insertdatetime media table paste wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | bold italic | image | alignleft aligncenter alignright | bullist numlist outdent indent | help",
                    mobile: {
                      theme: "mobile",
                      placeholder: "습득물 게시판에 대한 공지사항이 들어갈 예정입니다.",
                      plugins: ["autosave", "lists", "autolink", "placeholder"],
                    },
                  }}
                  onChange={this.handleEditorChange}
                />
              </S.TextEditor> 
            </S.TextEditorContainer>

            <S.SubmitButton 
              to = '/notice'
              onClick = {this.Upload}>작성</S.SubmitButton>
          </S.UploadContainer>
        </S.Upload>
      </Layout>
    );
  }
};

export default NoticeUpload;
