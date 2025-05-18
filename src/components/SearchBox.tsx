
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

const SearchBox: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
  const [destination, setDestination] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');
  const [isHalalFriendly, setIsHalalFriendly] = useState<boolean>(false);

  const handleSearch = () => {
    console.log({
      destination,
      checkInDate,
      checkOutDate,
      guests,
      isHalalFriendly
    });
  };

  return (
    <div className="container mx-auto -mt-12 px-4 z-20 relative">
      <div className="bg-amr-white rounded-xl shadow-lg p-6 border border-amr-beige">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
            <div className="flex space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    {checkInDate ? format(checkInDate, 'PP') : <span>Check-in</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkInDate}
                    onSelect={setCheckInDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left">
                    {checkOutDate ? format(checkOutDate, 'PP') : <span>Check-out</span>}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOutDate}
                    onSelect={setCheckOutDate}
                    initialFocus
                    disabled={(date) => (checkInDate ? date < checkInDate : false)}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-amr-green">
              <span className="block">Guests / Rooms</span>
              <span className="block text-xs arabic">الضيوف / الغرف</span>
            </label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest, 1 Room</SelectItem>
                <SelectItem value="2">2 Guests, 1 Room</SelectItem>
                <SelectItem value="3">3 Guests, 1 Room</SelectItem>
                <SelectItem value="4">4 Guests, 1 Room</SelectItem>
                <SelectItem value="family">2 Adults, 2 Children</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2 pt-7">
            <Checkbox 
              id="halal" 
              checked={isHalalFriendly} 
              onCheckedChange={(checked) => setIsHalalFriendly(checked as boolean)}
            />
            <label htmlFor="halal" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              <div className="flex flex-col">
                <span>Halal Friendly</span>
                <span className="text-xs arabic">صديقة للحلال</span>
              </div>
            </label>
          </div>

          <Button 
            className="bg-amr-green hover:bg-amr-green/90 text-amr-white mt-5" 
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
