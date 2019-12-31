# modaljs

A simple javascript plugin for modals. 

It works by adding a class to an html element on button event click.

Features:
- Full control of modal init animation 😉 the way you want it with css
- Keyboard shortcut to close modal `esc`

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

- Download to your project directory
- Add modaljs.js to your project

## Usage

### Simple setup
```
const openBtn = document.querySelector('#mobile-filtr');
const closeBtn = document.querySelector('#filtr-close-modal');
const targetModal = document.querySelector('#collections .fl-p ');
const modal = new Modal(openBtn, closeBtn);
modal.openModal(targetModal, 'modal-active');
modal.closeModal();
```
