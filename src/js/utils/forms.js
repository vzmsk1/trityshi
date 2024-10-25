const addError = input => {
  if (input.closest('.field')) {
    input.closest('.field').classList.add('_has-error');
  }
};

const removeError = input => {
  input.closest('.field') &&
    input.closest('.field').classList.remove('_has-error');
};

const onInputFocusInHandler = ({ target }) => {
  removeError(target);
};

const onInputFocusOutHandler = ({ target }) => {
  if (!target.value.length || target.closest('._has-error')) {
  }
};

const onFormSubmitHandler = (form, e) => {
  e.preventDefault();

  form.querySelectorAll('input, textarea').forEach(input => {
    if (!input.value.length) {
      addError(input);
    }
  });

  !form.querySelector('._has-error') && form.submit();
};

const initTextAreaCounter = () => {
  if (document.querySelectorAll('.textarea__counter').length) {
    document.querySelectorAll('.textarea').forEach(textarea => {
      const field = textarea.querySelector('textarea');
      const current = textarea.querySelector('.textarea__counter-current');

      field.addEventListener('input', function () {
        current.innerHTML = field.value.trim().length;
      });
    });
  }
};
initTextAreaCounter();

const initFormFields = () => {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', function (e) {
      onFormSubmitHandler(form, e);
    });

    form.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('focusin', onInputFocusInHandler);
      input.addEventListener('focusout', onInputFocusOutHandler);
    });
  });
};
initFormFields();
