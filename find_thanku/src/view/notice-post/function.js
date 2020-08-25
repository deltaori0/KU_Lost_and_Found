
export const PostDelete = async (userid) => {
    const url = window.location.pathname; 

    var bool = window.confirm('정말 삭제하시겠습니까?');
    //삭제 안함
    if(!bool){
      return; 
    }
    //삭제함 && 접속자 id가 관리자의 username과 같으면 (temp:admin)
    if(bool&&userid=="admin"){
      const request = await fetch("http://localhost:4000" + url, {
        method: "DELETE",
      });
      if (!request.ok) {
        alert("게시글 삭제 실패");
        return;
      }
      await request.json();      
      alert('삭제되었습니다!'); 
    }
    //작성자!= 접속자 -> 삭제 안함
    else{
      alert('삭제 권한 없음');
    }
  }