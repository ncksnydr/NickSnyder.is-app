/**
 *  Stylelint → Rules → Enforce conventions → Empty lines
 *  @see https://stylelint.io/user-guide/rules/#empty-lines
 */

module.exports = {
	rules: {
		'at-rule-empty-line-before': ['always', {
			except: ['after-same-name', 'inside-block', 'blockless-after-same-name-blockless', 'blockless-after-blockless', 'first-nested']
		}],
		'comment-empty-line-before': ['always', {
			except: ['first-nested'],
			ignore: ['after-comment']
		}],
		'custom-property-empty-line-before': 'never',
		'declaration-empty-line-before': 'never',
		'rule-empty-line-before': ['always-multi-line', {
			except: ['after-rule', 'inside-block-and-after-rule', 'first-nested']
		}]
	}
};
