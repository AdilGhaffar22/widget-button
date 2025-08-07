export const widgetButtonThemes = {
	default: {
		buttonClassName: '!bg-[#C9FA49] !text-[#333333] font-bold rounded-full',
		hoverEffect: 'transform: translateY(-1px)',
	},
	dark: {
		buttonClassName: '!bg-gray-800 !text-white font-bold rounded-full',
		hoverEffect: 'opacity: 0.8',
	},
	blue: {
		buttonClassName: '!bg-blue-500 !text-white font-bold rounded-full',
		hoverEffect: 'transform: scale(1.02)',
	},
	gradient: {
		buttonClassName:
			'!bg-gradient-to-r !from-purple-500 !to-pink-500 !text-white font-bold rounded-full',
		hoverEffect: 'transform: translateY(-2px)',
	},
};

export type WidgetButtonTheme = keyof typeof widgetButtonThemes;
