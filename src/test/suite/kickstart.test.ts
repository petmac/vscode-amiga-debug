import * as path from 'path';
import * as assert from 'assert';
import { GetCycles, GetJump, JumpType } from "../../client/68k";

import { print_insn_m68k } from '../../client/68k-dis';
import { FD, Kickstart } from '../../kickstart';

const testDataDir = path.resolve(__dirname, "../../../src/test/suite/data");
const binDir = path.resolve(__dirname, "../../../bin/opt/bin");
const symDir = path.resolve(__dirname, "../../../bin/symbols");

suite("kickstart", () => {
	test("1.3", () => {
		const kickstart = new Kickstart(path.join(testDataDir, 'private/Kickstart v1.3 r34.5 (1987)(Commodore)(A500-A1000-A2000-CDTV)[!].rom'), path.join(testDataDir, 'fd'));
		kickstart.writeIdc();
		kickstart.writeSymbols(binDir, symDir);
	});
	test("FD", () => {
		const fd = new FD(path.join(testDataDir, 'fd/graphics_lib.fd'));
		assert.deepEqual(fd.functions.find((f) => f.lvo === 228), { lvo: 228, name: 'WaitBlit', minVersion: 0 });
		assert.deepEqual(fd.functions.find((f) => f.lvo === 828), { lvo: 828, name: 'CalcIVG', minVersion: 39 });
	});
});