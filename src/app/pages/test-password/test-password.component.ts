import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-test-password',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './test-password.component.html',
  styleUrls: ['./test-password.component.css']
})
export class TestPasswordComponent {
  password: string = '';
  strengthClasses = ['gray', 'gray', 'gray'];

  checkPasswordStrength(): void {
    const length = this.password.length;

    if (length < 8 && length > 0) {
      this.setStrengthClasses('red', 'red', 'red');
    } else if (length === 0) {
      this.setStrengthClasses('gray', 'gray', 'gray');
    } else {
      this.updateStrengthMeter(this.calculatePasswordStrength(this.password));
    }
  }

  calculatePasswordStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%&*(),.?":]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return 'strong';
    } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
      return 'medium';
    } else {
      return 'easy';
    }
  }

  updateStrengthMeter(strength: string): void {
    switch (strength) {
      case 'easy':
        this.setStrengthClasses('red', 'gray', 'gray');
        break;
      case 'medium':
        this.setStrengthClasses('yellow', 'yellow', 'gray');
        break;
      case 'strong':
        this.setStrengthClasses('green', 'green', 'green');
        break;
    }
  }

  setStrengthClasses(section1: string, section2: string, section3: string): void {
    this.strengthClasses = [section1, section2, section3];
  }
}
