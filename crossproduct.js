class CrossProduct {

    constructor(ObjA, ObjB)
    {
        this.A = null;
        this.B = null;
        try {
            this.A = [ ObjA.x, ObjA.y, ObjA.z ];
        } catch (error)
        {
            this.A = [ ObjA.width, ObjA.height, ObjA.depth];
        }
        finally {
            this.A = ObjA;
        }
        try {
            this.B = [ ObjB.x, ObjB.y, ObjB.z];
        } catch (error)
        {
            this.B = [ ObjB.width, ObjB.height, ObjB.depth];
        }
        finally {
            this.B = ObjB;
        }
        this.answer = 0;
        this.i = 0;
        this.orthovect = [];
    }

    getSimilarity(trigFunction = 0, degree = 45) {
        this.answer = 0;
        this.i = 0;
        this.A.forEach(x => {
            this.answer += (x * this.B[this.i]);
            this.i++;
        });
        if (trigFunction == 0) {
            this.answer *= Math.sin(degree);
        }
        else if (trigFunction == 1) {
            this.answer *= Math.cos(degree);
        } else if (trigFunction == 2) {
            this.answer *= Math.tan(degree);
        } else if (trigFunction == 3) {
            this.answer *= Math.sinh(degree);
        } else if (trigFunction == 4) {
            this.answer *= Math.cosh(degree);
        } else if (trigFunction == 5) {
            this.answer *= Math.tanh(degree);
        } else {
            console.log("param3: 0 sin, 1 cos, 2 tan, 3 sinh, 4 cosh, 5 tanh");
        }
        return this.answer;
    }

    ObjA(oA) {
        this.A = [ oA.x, oA.y, oA.z];
    }

    ObjB(oB) {
        this.B = [ oB.x, oB.y, oB.z];
    }

    OrthogonalVector()
    {
        // a1*b2 - a2*b1, a2*b0 - a0b2, a0b1 - a1b0
        var voteX = Math.round((this.A.y*this.B.z) - (this.A.z*this.B.y));
        var voteY = Math.round((this.A.z*this.B.x) - (this.A.x*this.B.z));
        var voteZ = Math.round((this.A.x*this.B.y) - (this.A.y*this.B.x));
        this.orthovect.push(voteX);
        this.orthovect.push(voteY);
        this.orthovect.push(voteZ);
        if (voteX == voteY)
        {
            console.log(voteX);
            return voteX; 
        }
        if (voteY == voteZ)
        {
            console.log(voteX);
            return voteX;
        }
        if (voteZ == voteX)
        {
            console.log(voteY);
            return voteY;
        }
        
    }
}

export {CrossProduct};