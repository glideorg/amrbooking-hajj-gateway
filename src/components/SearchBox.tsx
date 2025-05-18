
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Users, Hotel } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';

const SearchBox: React.FC = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  const [destination, setDestination] = useState<string>('');
  const [guestCount, setGuestCount] = useState<string>('2');
  const [roomCount, setRoomCount] = useState<string>('1');

  const handleSearch = () => {
    console.log({
      destination,
      checkInDate: date?.from,
      checkOutDate: date?.to,
      guests: guestCount,
      rooms: roomCount
    });
  };

  return (
    <div className="container mx-auto -mt-12 px-4 z-20 relative">
      <div className="bg-amr-white rounded-xl shadow-lg p-6 border border-amr-beige">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-amr-green">
              <span className="block">Destination</span> 
              <span className="block text-xs arabic">الوجهة</span>
            </label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="makkah">Makkah, Makkah</SelectItem>
                <SelectItem value="madinah">Madinah, Madinah</SelectItem>
                <SelectItem value="riyadh">Riyadh, Riyadh</SelectItem>
                <SelectItem value="abha">Abha, Asir</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-amr-green">
              <span className="block">Check-in / Check-out</span>
              <span className="block text-xs arabic">تاريخ الوصول / المغادرة</span>
            </label>
            <div className="flex">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "MMM d, yyyy")} - {format(date.to, "MMM d, yyyy")}
                        </>
                      ) : (
                        format(date.from, "MMM d, yyyy")
                      )
                    ) : (
                      <span>Select dates</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-amr-green">
              <span className="block">Guests</span>
              <span className="block text-xs arabic">الضيوف</span>
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                type="number" 
                min="1" 
                value={guestCount} 
                onChange={(e) => setGuestCount(e.target.value)}
                className="pl-9" 
                placeholder="Number of guests"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-amr-green">
              <span className="block">Rooms</span>
              <span className="block text-xs arabic">الغرف</span>
            </label>
            <div className="relative">
              <Hotel className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                type="number" 
                min="1" 
                value={roomCount} 
                onChange={(e) => setRoomCount(e.target.value)}
                className="pl-9" 
                placeholder="Number of rooms"
              />
            </div>
          </div>

          <Button 
            className="bg-amr-green hover:bg-amr-green/90 text-amr-white mt-5 lg:col-span-4" 
            onClick={handleSearch}
          >
            Search
            <span className="ml-1 text-xs arabic">بحث</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
