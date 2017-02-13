/**=======================================================================
 * [ Watcher ]
 * 値の監視をして、変更された場合は指定したコールバックを実行する。
 * 値の型は{string|number|array|object}に対応。
 * arrayおよびobjectのディープ監視も可能（deep指定）。
 * Watch.jsに依存する。
 *
 * objectの場合、deepの他に、「新しく追加されたプロパティ」に反応させたい場合、
 * detectNewAttrをtrueにすること。（デフォルトではfalse）
 *
 * (例)
 =======================================================================*/
export default class {
    constructor(param) {
        this.target = null;
        this.onChange = ()=>{};
        this.deep = 1;
        this.detectNewAttr = true;

        Object.assign(this, param);
    }
    init(){
        if (this.target === null) {
            console.error('Watcher ::: target is null');
            return;
        }

        watch(this.target, (prop, action, newvalue, oldvalue)=>{
            this.onChange(newvalue, oldvalue);
        });
    }
    destory(){

    }
}
