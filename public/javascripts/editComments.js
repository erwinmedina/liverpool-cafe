const button = document.querySelectorAll('.edit');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", additional);
}

function additional(event) {
    // event.target.createAttribute("disabled");
    console.log(event.target);
    let lmao = event.target.parentNode.previousElementSibling.childNodes[1].childNodes[1];
    previousComment = lmao.innerHTML;

    lmao.outerHTML = '<textarea placeholder="update comment.."class="form-control" name="content" required>' + previousComment.trim() + '</textarea><button class="btn btn-sm btn-primary" type="submit">Update Comment</button>'

}

