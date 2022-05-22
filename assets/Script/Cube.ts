
import { _decorator, Component, Node, Prefab, instantiate, Vec3,math } from 'cc';
const { ccclass, property } = _decorator;
const { Mat4 } = math;

/**
 * Predefined variables
 * Name = Cube
 * DateTime = Sun May 22 2022 18:21:19 GMT+0900 (대한민국 표준시)
 * Author = twa04175
 * FileBasename = Cube.ts
 * FileBasenameNoExtension = Cube
 * URL = db://assets/Script/Cube.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

export enum DIRECTION{
    Horizontal,
    Vertical
}

@ccclass('Cube')
export class Cube extends Component {

    @property({type: Prefab})
    public block: Prefab = null;

    private cubes: Node[][][] = [[[],[],[]],[[],[],[]],[[],[],[]]];
    private currentCubes: Node[][][] = [[[],[],[]],[[],[],[]],[[],[],[]]];

    start () {
        for(let x = 0; x<3; x++) {
            for(let y = 0; y<3; y++) {
                for(let z = 0; z<3; z++) {
                    let block: Node = instantiate(this.block);
                    block.setPosition(new Vec3(1.2*x,1.2*y,1.2*z));
                    block.parent = this.node;
                    this.cubes[x][y][z] = block;
                    this.currentCubes[x][y][z] = block;
                }
            }
        }

        this.schedule(()=>{
            this.rotate(Math.floor(Math.random()*2), Math.floor(Math.random()*3));
        }, 1,100);
    }

    // 회전이 필요한 노드들의 번호를 가져오는 함수

    /** 방향과 번호가 주어졋을 때 회전연산 실행
     *  방향과 번호를 통해 회전해야하는 노드들의 위치 참조 가져오기
     */
    rotate(dir:DIRECTION, line:Number){
        console.log('Cube.ts:rotate:53 -> Rotate ',JSON.stringify(dir),':',line,'line');

        let cubes = [];
        let center = null;
        for(let x = 0; x<3; x++) {
            for(let y = 0; y<3; y++) {
                for(let z = 0; z<3; z++) {
                    if(dir === DIRECTION.Vertical) {
                        if(line === z) {
                            cubes.push(this.currentCubes[x][y][z]);
                        }
                    }else if(dir === DIRECTION.Horizontal) {
                        if(line === y) {
                            cubes.push(this.currentCubes[x][y][z]);
                        }
                    }
                }
            }
        }

        //먼저 가로방향 회전부터
        for(let i = 0; i<cubes.length; i++) {

        }

        //현재 위치값 전환
    }

    update (deltaTime: number) {
        // [4]
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
