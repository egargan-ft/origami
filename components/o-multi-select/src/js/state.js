export function updateState() {
	if (this.numberOfSelectedOptions) {
		this.inputText.innerText = '';
		this.selectedOptions.style.display = 'block';
		const inputElWidth = this.inputEl.offsetWidth;
		const selectedOptionsComputedStyles = getComputedStyle(
			this.selectedOptions
		);
		const {paddingLeft, paddingRight} = selectedOptionsComputedStyles;
		const sumOfChildrenWidthInitialValue =
			parseInt(paddingLeft, 10) + parseInt(paddingRight, 10);
		const sumOfChildrenWidth = [...this.selectedOptions.children]
			.map(el => el.offsetWidth)
			.reduce((prev, curr) => prev + curr, sumOfChildrenWidthInitialValue);

		if (sumOfChildrenWidth > inputElWidth * 0.9) {
			this.selectedOptions.classList.add('o-multi-select__visually-hidden');
			this.inputText.innerText =
				this.numberOfSelectedOptions + ' options selected';
		} else {
			this.selectedOptions.classList.remove(
				'o-multi-select__visually-hidden'
			);
		}
	} else {
		this.selectedOptions.style.display = 'none';
		if (this.open) {
			this.inputText.innerText = 'Select options below';
		} else {
			this.inputText.innerText = 'Click to select options';
		}
	}
}
