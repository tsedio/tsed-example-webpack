import {PlatformTest} from "@tsed/common";
import {CalendarsService} from "./CalendarsService";

describe("CalendarsService", () => {
  beforeEach(() => PlatformTest.create());
  afterEach(() => PlatformTest.reset());

  it("should return calendar by ID", async () => {
    const service = PlatformTest.get<CalendarsService>(CalendarsService);
    const item = await service.findOne({})!;

    expect(service.findById(item._id)).toEqual(item);
  });
});
