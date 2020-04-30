/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

rect={
    width:50,
    height:40,
    ter:function (){
        if((typeof this.width === "number") && (typeof this.height === "number")){
            return this.width * this.height;
        }else{
            return "Wrong data type"
        }
        

        
        
    },
    kocka: function (){
        return this.width === this.height;
    }
    
};
document.write(rect.ter() + "cm2");
br();
document.write("kocka? : " + rect.kocka());
br();

rect.height = 50;
document.write(rect.ter() + "cm2");
br();
document.write("kocka? : " + rect.kocka());
br();

rect.height= "adat";
document.write(rect.ter() + "cm2");
br();
document.write("kocka? : " + rect.kocka());
br();

delete rect.height;
document.write(rect.ter() + "cm2");
br();
document.write("kocka? : " + rect.kocka());
br();

rect.height=20;
document.write(rect.ter() + "cm2");
br();
document.write("kocka? : " + rect.kocka());
br();





function br(){
    document.write("<br>");
}
