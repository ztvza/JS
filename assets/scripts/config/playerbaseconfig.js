const baseConfig = {
	baseParams: {
		warrior: {
			hp: 200,
			mp: 50
		},
		scout: {
			hp: 150,
			mp: 100
		},
		wizard: {
			hp:100,
			mp: 200
		}
	}
}

const player = {
	name: '',
	class: '',
	xp: 0,
	level: 0,
	baseParams: {
		hp: null,
		mp: null
	},
	attack: {
		minDmg: null,
		maxDmg: null,
		action: null
	}
};
