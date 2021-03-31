const button = document.querySelectorAll('.edit');
const userComment = document.querySelectorAll('.user-comment');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", additional);
}


function additional(event) {
    let lmao = event.target.parentNode.previousElementSibling.childNodes[1].childNodes[1];
    console.log(userComment);
    console.log(event.target.parentElement.className);
    lmao.outerHTML = '<textarea placeholder="update comment.."class="form-control" name="content"></textarea><button class="btn btn-sm btn-primary" type="submit">Update Comment</button>'

}

