import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PresaleWidget } from '../index';

export default {
	title: 'Components/PresaleWidget',
	component: PresaleWidget,
} as ComponentMeta<typeof PresaleWidget>;

const Template: ComponentStory<typeof PresaleWidget> = (args) => (
	<PresaleWidget {...args} />
);

export const Default = Template.bind({});
Default.args = {
	children: (
		<p style={{ background: 'beige', padding: '20px' }}>
			max-width default is 1024px.
		</p>
	),
};
