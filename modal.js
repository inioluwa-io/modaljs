"use-strict";

/* 
@param {HTMLElement} caller - Element that open and closes the modal
@param {HTMLElement} [closeCaller = null] -  Element that closes the modal (optional)
 */
function Modal(caller, closeCaller = null) {
  this.caller = caller;
  this.closeCaller = closeCaller;
}

Modal.prototype.openModal = function(target, className) {
  if (arguments.length !== 2) {
    throw new SyntaxError(
      `Expected 2 argument instead got ${arguments.length}`
    );
  }

  this.target = target;
  this.className = className;
  this.caller.addEventListener("click", () => {
    this.target.classList.add(className);
    document.querySelector("body").style.overflowY = "hidden";
  });
};

Modal.prototype.closeModal = function() {
  if (this.closeCaller === null) {
    this.caller.addEventListener("click",  () => {
      this.target.classList.remove(this.className);
      document.querySelector("body").style.overflowY = "visible";
    });
  } else {
    this.closeCaller.addEventListener("click", () => {
      this.target.classList.remove(this.className);
      document.querySelector("body").style.overflowY = "visible";
    });
  }

  //close modal on esc key pressed down
  document.addEventListener("keydown", e => {
    const keyVal = e.which || e.keyCode || e.charCode || 0;

    if (keyVal && keyVal === 27) {
      this.target.classList.remove(this.className);
      document.querySelector("body").style.overflowY = "visible";
    }
  });
};
