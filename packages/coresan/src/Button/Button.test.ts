import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Button from './Button.vue';

describe('Button.vue', () => {
  it('should render slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Confirm',
      },
    });
    expect(wrapper.text()).toContain('Confirm');
  });

  it('should apply correct type class', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary',
      },
    });
    expect(wrapper.classes()).toContain('m-button--primary');
  });

  it('should emit click event when clicked', async () => {
    const wrapper = mount(Button);
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toHaveProperty('click');
  });
});