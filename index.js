
// Your code here

const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px")
    const left = parseInt(leftNumbers,10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left;
    left = parseInt(left) || 0; //using 0 as its default value


if (left < 300) {
    const newPosition = left + 10; //adjust the increment to > 179
    dodger.style.left = `${newPosition}px`;
}
}



describe('moveDodgerRight()',() => {
    beforeEach(() => {
        dodger = document.getElementById('dodger')
    })
it('moves the DODGER to the right', () => {
    let left = dodger.style.left
    left = parseInt(left)

    moveDodgerRight()

    let newPosition = dodger.style.left
    newPosition = parseInt(newPosition)
    if (left < 300){
        expect(newPosition).to.be.above(left)
    }else{expect(newPosition).to.equal(left)}
})


})
