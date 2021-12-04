import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  setValue(value: string | null, options: any) {
    if (value === null) {
      super.setValue(null, { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 3 && this.value.length === 2) {
      super.setValue(value.slice(0, 2) + '/' + value.slice(-1), {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length === 3 && this.value.length === 4) {
      super.setValue(value.slice(0, -1), {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
