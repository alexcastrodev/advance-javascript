import { assertEquals } from "https://deno.land/std@0.195.0/testing/asserts.ts";
import Compile from "./compile.ts"
import { PatternType } from "./constants.ts";

Deno.test("compile", () => {
    const pattern = '^abc';
    const compile = new Compile(pattern);
    compile.compile();
    console.log(compile.getTree().length)

    assertEquals(compile.getTree(), [
        { type: PatternType.BEGIN }, 
        { type: PatternType.UNUSED }, 
        { type: PatternType.UNUSED }, 
        { type: PatternType.UNUSED }
    ])
})