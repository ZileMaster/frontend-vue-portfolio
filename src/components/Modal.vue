<template>
    <transition name="modal-animation">
        <div class="popup">
            <transition name="modal-animation-inner">
                <div class="popup-inner">
                    <slot />
                    <button class="popup-close" @click="ToggleModal()">Close</button>
                </div>
            </transition>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: ['ToggleModal']
  };
  </script>
  
  <style scoped>
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .popup-inner {
        position: relative;
        max-width: 640px;
        width: 80%;
        max-height: 95%;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0, 2px, 4px, -1px rgba(0, 0, 0, 0.06);
        background: #FFF;
        padding: 64px 16px;
        border-radius: 15px;
    }

    .popup-close {
        background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
        border: 0;
        border-radius: 12px;
        margin-top: 15px;
        margin-bottom: 15px;
        color: #FFFFFF;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 2.5;
        outline: transparent;
        padding: 0 1rem;
        text-align: center;
        text-decoration: none;
        transition: box-shadow .2s ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
    }

    .popup-close:not([disabled]):focus {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.popup-close:not([disabled]):hover {
  box-shadow: 0 0 .25rem rgba(0, 0, 0, 0.5), -.125rem -.125rem 1rem rgba(239, 71, 101, 0.5), .125rem .125rem 1rem rgba(255, 154, 90, 0.5);
}

.modal-animation-enter-active, 
.modal-animation-leave-active {
    transition: opacity .3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from{
    opacity: 0;
}
.modal-animation-enter-to{
    opacity: 1;
}
.modal-animation-leave-from{
    opacity: 1;
}
.modal-animation-{
    opacity: 0;
}

</style>