/**
 * Created by thomas on 2017-01-30.
 */

var config = {
    config: {
        mixins: {
            'Magento_ConfigurableProduct/js/configurable': {
                'CycleMotion_DynamicSKU/js/model/skuswitch': true
            },
			'Magento_Swatches/js/swatch-renderer': {
                'CycleMotion_DynamicSKU/js/model/swatch-skuswitch': true
            }
        }
    }
};