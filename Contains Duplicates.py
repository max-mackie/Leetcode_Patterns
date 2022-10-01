class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        record = set()
        for num in nums:
            if num in record:
                return True
            else:
                record.add(num)
        else:
            return False

#   This method uses more memory and has a slower best case run time
    def containsDuplicate(self, nums: List[int]) -> bool:
        return: len(nums) > len(set{nums})
        

# Both solutions have worst case runtime of O(n) but the first solution is quicker in a best case situation because it can stop once a duplicate has been found
