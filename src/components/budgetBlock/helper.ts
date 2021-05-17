import { AdvBudgetFormBlockProps } from './AdvBudgetFormBlock';

const checkVisibilityBlock = (object: AdvBudgetFormBlockProps): boolean => {
  if (!object.isEditing) {
    if (object.defaultForItem && object.defaultForItem > 0) {
      return true;
    }
  }
  if (
    object.isEditing &&
    !object.isProduct &&
    object.defaultForItem &&
    object.defaultForItem > 0 &&
    object.form.getFieldValue('isPriorityAdvBudget')
  ) {
    return false;
  }
  if (object.isEditing && !object.isProduct && object.defaultForItem && object.defaultForItem > 0) {
    return true;
  }
  if (object.isEditing) {
    if (!object.form.getFieldValue('isPriorityAdvBudget')) {
      if (!object.defaultForItem) {
        return false;
      }
    }
  }
  if (object.isEditing) {
    if (!object.form.getFieldValue('isPriorityAdvBudget')) {
      return true;
    }
  }
  return false;
};
export default checkVisibilityBlock;
