//(c) 2014 Indexia, Inc.
import FormModal from './modal-form';

export default FormModal.extend({
  classNameBindings: ['form'],
  attributeBindings: ['role'],
  role: 'form',
  model: void 0,
  submit_button: false,
});
